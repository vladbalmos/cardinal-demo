export default class OrganizationModel {

    /**
     * @var {OrganizationModel}
     */
    static instance;

    constructor() {
        this.modelIsBinded = false;
        this.data = {
            organizations: [
                {
                    name: "Test",
                    uid: 1,
                    clustersConfiguration: {

                    }
                },
                {
                    name: "Code932",
                    uid: 2,
                    clustersConfiguration: {

                    }
                }
            ],
            editForm: {
                name: {
                    label: 'Organization Name',
                    name: 'name',
                    required: true,
                    placeholder: '',
                    value: '',
                },
                id: ''
            }
        }
    }

    /**
     * @param {string} uid
     * @return {string|undefined}
     */
    getOrganizationName(uid) {
        for (let org of this.data.organizations) {
            if (org.uid != uid) {
                continue;
            }
            return org.name;
        }

        return;
    }

    /**
     * @param {string} uid
     * @return {void}
     */
    removeOrganization(uid) {
        let foundOrgIndex = null;
        for (let i = 0; i < this.data.organizations.length; i++) {
            const org = this.data.organizations[i];
            if (org.uid == uid) {
                foundOrgIndex = i;
                break;
            }
        }

        if (foundOrgIndex === null) {
            console.warn(`Organization with uid ${uid} was not found`);
            return;
        }

        this.data.organizations.splice(foundOrgIndex, 1);
    }

    /**
     * @param {callback} callback
     */
    saveOrganization(callback) {
        if (this.data.editForm.id) {
            this._updateOrganization(callback);
        } else {
            this._addOrganization(callback)
        }

        this._clearFormData();
    }

    /**
     * @param {callback} bindModelCallback
     * @return {Proxy}
     */
    registerBindings(bindModelCallback) {
        if (this.modelIsBinded) {
            return this.data;
        }

        this.modelIsBinded = true;
        this.data = bindModelCallback(this.data);
        return this.data;
    }

    /**
     * @param {string} uid
     */
    populateFormData(uid) {
        for (const org of this.data.organizations) {
            if (org.uid == uid) {
                this.data.editForm.name.value = org.name;
                this.data.editForm.id = org.uid;
            }
        }
    }

    /**
     * @param {callback} callback
     */
    _updateOrganization(callback) {
        console.log('Updating organization', callback);
    }

    /**
     * @param {callback} callback
     */
    _addOrganization(callback) {
        const editFormData = this.data.editForm;

        if (!editFormData.name.value) {
            return callback(new Error('Missing organization name'));
        }

        const newOrganization = {
            name: editFormData.name.value,
            uid: this._autoIncrementLastUid(),
            clustersConfiguration: {

            }
        }

        this.data.organizations.push(newOrganization);
        callback(null, newOrganization);
    }

    _autoIncrementLastUid() {
        let maxUid = 0;
        for (const org of this.data.organizations) {
            if (org.uid >= maxUid) {
                maxUid = org.uid;
            }
        }

        return maxUid + 1;
    }

    _clearFormData() {
        this.data.editForm.name.value = '';
        this.data.editForm.id = '';
    }

    static getInstance() {
        if (!OrganizationModel.instance) {
            OrganizationModel.instance = new OrganizationModel();
        }

        return OrganizationModel.instance;
    }
}
