import BPDController from "./base-controllers/BPDController.js";
import SWAgent from "./../SWAgent.js";

export default class OrganizationsController extends BPDController {

    constructor(element) {
        super(element);

        this.model = this.orgModel.registerBindings((data) => {
            return this.setModel(data);
        });

        this._setupFormData();

        // ============== Events Listeners
        this.on('openFeedback', (e) => {
            this.feedbackEmitter = e.detail;
        });


        // Edit organization request
        this.on('org:edit', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();

            const orgUid = e.data;
            this.redirect(`/?organization/edit#orgUid=${orgUid}`);
        });

        // Remove organization request
        this.on('org:remove', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            const orgUid = e.data;
            this._removeOrganization(orgUid);
        });
        // Add new key:value config pair for Kubernetes cluster
        this.on('org:add-kubernetes-config', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.orgModel.prepareNewKubernetesConfig();
        });
        // Remove key:value config pair for Kubernetes cluster
        this.on('org:remove-kubernetes-config', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.orgModel.removeKubernetesConfig(e.data);
        });
        // Save organization
        this.on('org:save', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.orgModel.saveOrganization((err, data) => {
                this._onSaveOrganization(err, data);
            });
        });
        this.on('org:manage-clusters', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();

            const orgUid = e.data;
            this.redirect(`/?cluster/index#orgUid=${orgUid}`);
        });

        this.on('files-selected', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this._listSelectedFiles(e.data);
        })

        this.on('upload-files', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this._uploadFiles();
        });

        this.on('upload-single-file', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this._uploadSingleFile();
        });

        window.addEventListener('hashchange', (e) => {
            this._setupFormData();
        });

        SWAgent.load('GPTUmvyXCTH0cQV9ciSZPVJu7i5LsTpwyILENgqIWeg%3D%7CImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCI%3De', (err, result) => {
            if (err) {
                console.error(err);
                return;
            }
            if (result.status === 'initialized') {
                window.location.reload(true);
            }
        });
    }

    /**
     * Show the list of selected files
     * @param {Array} files
     */
    _listSelectedFiles(files) {
        // Render the list of files
        const filesList = this._element.querySelector('#files-for-upload');

        for (const f of files) {
            const listItem = document.createElement('li');
            listItem.innerText = f.name;

            filesList.appendChild(listItem);
        }

        // Store a reference to the files
        this.files = files;
    }

    /**
     * Upload the files
     */
    _uploadFiles() {
        // Obtain a reference to the files
        const files = this.files;

        // Push the files into a FormData object
        const formData = new FormData();
        for (const f of files) {
            // Use array notation in the key to indicate multiple files
            formData.append('files[]', f);
        }

        // Upload endpoint
        const url = '/upload?path=/data/uploads&input=files[]&maxSize=16m&allowedTypes=image/jpeg,image/png,image/gif'

        // Send the request
        fetch(url, {
            method: 'POST',
            body: formData
        }).then((response) => {
            response.json().then((result) => {
                console.log(result);
                if (response.ok) {
                    console.log("Upload was successful!");
                } else {
                    console.log("Upload failed!");
                }

                // Success or file level validation error
                if (Array.isArray(result)) {
                    for (const item of result) {
                        if (item.error) {
                            console.error(`Unable to upload ${item.file.name} due to an error. Code: ${item.error.code}. Message: ${item.error.message}`);
                            continue;
                        }
                        console.log(`Uploaded ${item.file.name} to ${item.result.path}`);
                    }
                    return;
                }

                // Validation error. Can happend when HTTP status is 400
                if (typeof result === 'object') {
                    console.error(`An error occured: ${result.message}. Code: ${result.code}`);
                    return;
                }

                // Error is a string. This happens when the HTTP status is 500
                console.error(`An error occured: ${result}`);
            })
        }).catch((err) => {
            console.error(err);
        })
    }

    /**
     * Upload a file using the request body method
     */
    _uploadSingleFile() {
        const file = this.files.shift();

        // Upload endpoint
        const url = '/upload?path=/data/uploads&filename=image.jpg&maxSize=16m&allowedTypes=image/jpeg,image/png,image/gif'

        // Send the request
        fetch(url, {
            method: 'POST',
            body: file
        }).then((response) => {
            response.json().then((result) => {
                console.log(result);
                if (response.ok) {
                    console.log("Upload was successful!");
                } else {
                    console.log("Upload failed!");
                }

                // Success or file level validation error
                if (Array.isArray(result)) {
                    for (const item of result) {
                        if (item.error) {
                            console.error(`Unable to upload ${item.file.name} due to an error. Code: ${item.error.code}. Message: ${item.error.message}`);
                            continue;
                        }
                        console.log(`Uploaded ${item.file.name} to ${item.result.path}`);
                    }
                    return;
                }

                // Validation error. Can happend when HTTP status is 400
                if (typeof result === 'object') {
                    console.error(`An error occured: ${result.message}. Code: ${result.code}`);
                    return;
                }

                // Error is a string. This happens when the HTTP status is 500
                console.error(`An error occured: ${result}`);
            })
        }).catch((err) => {
            console.error(err);
        })
    }

    /**
     * Remove organization
     * @param {string} orgUId
     */
    _removeOrganization(orgUid) {
        const orgName = this.orgModel.getOrganizationName(orgUid);

        const result = window.confirm(`Are you sure you want to remove the "${orgName}" organization?`)
        if (!result) {
            return;
        }

        this.orgModel.removeOrganization(orgUid);
    }

    /**
     * Called after model attempts to save a new
     * or existing organization
     * @param {Error} err
     * @param {object} data
     */
    _onSaveOrganization(err, data) {
        if (err) {
            this.showError(err);
            return;
        }

        this.redirect('/?home');
    }


    /**
     * Parse the current url and detect if we're creating a new organization
     * or editing an existing one
     */
    _setupFormData() {
        const searchQuery = window.location.search.substr(1);
        const segments = searchQuery.split('/');
        const entity = segments.shift();
        const action = segments.shift();
        const hashParams = this.parseHashFragmentParams();

        if (entity === 'organization') {
            switch (action) {
                case 'create':
                    this.orgModel.clearFormData();
                    return;
                case 'edit':
                    if (typeof hashParams.orgUid !== 'undefined') {
                        this.orgModel.populateFormData(hashParams.orgUid);
                    }
                    return;
            }
        }
    }
}
