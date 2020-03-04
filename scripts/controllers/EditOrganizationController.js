import BindableController from "./base-controllers/BindableController.js";

export default class EditOrganizationController extends BindableController {

    constructor(element) {
        super(element);
        this.model = this.setModel({
            name: {
                label: 'Organization Name',
                name: 'name',
                required: true,
                placeholder: '',
                value: '',
            },
            endpoint: {
                label: 'Kubernetes Endpoint',
                name: 'endpoint',
                required: true,
                placeholder: '',
                value: '',
            },
            id: ''
        });

        this.receive('save', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.saveOrganization();
        })

        this.receive('cancel', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.resetForm();
        })

        document.addEventListener('edit-organization', (e) => {
            e.stopImmediatePropagation();
            element.classList.remove('d-none');
            const organization = e.detail;

            if (organization) {
                return this.editOrganization(organization);
            }

            return this.addOrganization();
        });

        document.dispatchEvent(new CustomEvent('modelReady', {
            bubbles: true,
            cancelable: true,
            composed: true
        }));
    }

    editOrganization(organization) {
        this.changeFormTitle('Edit Organization');
        this.model.name.value = organization.name;
        this.model.endpoint.value = organization.endpoint;
        this.model.id = organization.id;

        const nameInput = this._element.querySelector('psk-text-input[name="name"]').querySelector('input');
        nameInput.value = this.model.name.value;

        const endpointInput = this._element.querySelector('psk-text-input[name="endpoint"]').querySelector('input');
        endpointInput.value = this.model.endpoint.value;

    }

    addOrganization() {
        this.changeFormTitle('Add Organization');
    }

    saveOrganization() {
        const nameInput = this._element.querySelector('psk-text-input[name="name"]').querySelector('input');
        const name = nameInput.value;

        const endpointInput = this._element.querySelector('psk-text-input[name="endpoint"]').querySelector('input');
        const endpoint = endpointInput.value;

        this.model.name.value = name;
        this.model.endpoint.value = endpoint;

        const newOrganizationEvent = new CustomEvent('save-organization', {
            detail: this.model
        });

        document.dispatchEvent(newOrganizationEvent);
        this.resetForm();
    }

    resetForm() {
        const nameInput = this._element.querySelector('psk-text-input[name="name"]').querySelector('input');
        const name = nameInput.value;

        const endpointInput = this._element.querySelector('psk-text-input[name="endpoint"]').querySelector('input');
        const endpoint = endpointInput.value;

        nameInput.value = '';
        endpointInput.value = '';
        this.model.name.value = '';
        this.model.endpoint.value = '';
        this.model.id = '';

        this._element.classList.add('d-none');
        this.changeFormTitle('');
    }

    changeFormTitle(title) {
        const h1 = this._element.querySelector('h1');
        h1.innerHTML = title;
    }
}
