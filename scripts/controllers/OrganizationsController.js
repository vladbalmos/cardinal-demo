import BindableController from "./base-controllers/BindableController.js";
import OrganizationModel from "../models/OrganizationModel.js"

export default class OrganizationsController extends BindableController {

    constructor(element) {
        super(element);

        this.feedbackEmitter = null;

        // Model is singleton in order to preserve state across
        // different same controller instances
        this.orgModel = OrganizationModel.getInstance();

        this.model = this.orgModel.registerBindings((data) => {
            return this.setModel(data);
        });

        this._setupFormData();

        // ================= Event Listeners
        this.receive('openFeedback', (e) => {
            this.feedbackEmitter = e.detail;
        });

        // Edit organization request
        this.receive('org:edit', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();

            const orgUid = e.data;
            this._redirect(`/?organization/edit#orgUid=${orgUid}`);
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
            this._showError(err);
            return;
        }

        // How do I redirect to homepage from here?
        this._redirect('/?home');
    }

    /**
     * Show an error alert
     * @param {Error|object|string} err
     */
    _showError(err) {
        let errMessage;
        if (err instanceof Error) {
            errMessage = err.message;
        } else if (typeof err === 'object') {
            errMessage = err.toString();
        } else {
            errMessage = err;
        }
        this.feedbackEmitter(errMessage, "Validation Error", "alert-danger");
    }

    /**
     * Redirect to another url
     *
     * @param {string} url
     */
    _redirect(url) {
        this._render('psk-route-redirect', { url });
    }

    /**
     * Render new child in the current element
     * @param {string} tag
     * @param {object} attributes
     * @return {Element}
     */
    _render(tag, attributes) {
        attributes = attributes || {};
        const el = document.createElement(tag);
        for (const attr in attributes) {
            const value = attributes[attr];
            el.setAttribute(attr, value);
        }

        this._element.appendChild(el);
        return el;
    }

    /**
     * Parse hash fragment params given as:
     * #var1=2&var2=3&var3=4
     *
     * @return {object}
     */
    _parseHashFragmentParams() {
        const hashParams = window.location.hash.substr(1);
        const segments = hashParams.split('&');
        const params = {};

        for (let i = 0; i < segments.length; i++) {
            const paramSegments = segments[i].split('=');
            const key = paramSegments.shift();
            const value = paramSegments.join('=');

            params[key] = value;
        }
        return params;
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
        const hashParams = this._parseHashFragmentParams();

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
