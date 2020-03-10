import BPDController from "./base-controllers/BPDController.js";

export default class OrganizationsController extends BPDController {

    constructor(element) {
        super(element);

        this.model = this.orgModel.registerBindings((data) => {
            return this.setModel(data);
        });

        this._setupFormData();

        // ============== Events Listeners
        this.receive('openFeedback', (e) => {
            this.feedbackEmitter = e.detail;
        });


        // Edit organization request
        this.receive('org:edit', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();

            const orgUid = e.data;
            this.redirect(`/?organization/edit#orgUid=${orgUid}`);
        });

        // Remove organization request
        this.receive('org:remove', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            const orgUid = e.data;
            this._removeOrganization(orgUid);
        });
        // Add new key:value config pair for Kubernetes cluster
        this.receive('org:add-kubernetes-config', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.orgModel.prepareNewKubernetesConfig();
        });
        // Remove key:value config pair for Kubernetes cluster
        this.receive('org:remove-kubernetes-config', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.orgModel.removeKubernetesConfig(e.data);
        });
        // Save organization
        this.receive('org:save', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.orgModel.saveOrganization((err, data) => {
                this._onSaveOrganization(err, data);
            });
        });
        this.receive('org:manage-clusters', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();

            const orgUid = e.data;
            this.redirect(`/?clusters/index#orgUid=${orgUid}`);
        });
        window.addEventListener('hashchange', (e) => {
            this._setupFormData();
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

        // How do I redirect to homepage from here?
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
