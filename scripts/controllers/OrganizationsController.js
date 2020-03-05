import BindableController from "./base-controllers/BindableController.js";
import OrganizationModel from "../models/OrganizationModel.js"

export default class OrganizationsController extends BindableController {

    constructor(element) {
        super(element);

        // Model is singleton in order to preserve state across
        // different same controller instances
        this.orgModel = OrganizationModel.getInstance();

        this.model = this.orgModel.registerBindings((data) => {
            return this.setModel(data);
        });

        // Edit organization request
        this.receive('org:edit', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();

            const orgUid = e.data;
            this.orgModel.populateFormData(orgUid);
            this._redirect('/?organization/edit');
        });

        // Remove organization request
        this.receive('org:remove', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            const orgUid = e.data;
            this._removeOrganization(orgUid);
        });

        element.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.orgModel.saveOrganization((err, data) => {
                this._onSaveOrganization(err, data);
            });
        }, true)
    }

    /**
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
            // TODO: show validation error
            return;
        }

        // How do I redirect to homepage from here?
        this._redirect('/?home');
    }

    /**
     * Redirect to another url
     *
     * @param {string} url
     */
    _redirect(url) {
        const redirectEl = document.createElement('psk-route-redirect');
        redirectEl.setAttribute('url', url);
        this._element.appendChild(redirectEl);
    }
}
