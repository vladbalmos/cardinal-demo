import BindableController from "./base-controllers/BindableController.js";

export default class EditOrganizationController extends BindableController {

    constructor(element) {
        super(element);
        this.model = this.setModel({
            name: {
                label: 'Organization Name',
                name: 'name',
                required: true,
                placeholder: 'Text',
                value: 'test'
            },
        });

        document.addEventListener('edit-organization', (e) => {
            e.stopImmediatePropagation();
            element.classList.remove('d-none');
            let organizationId = parseInt(e.data, 10);
            organizationId = isNaN(organizationId) ? 0 : organizationId;

            if (organizationId) {
                return this.editOrganization(e.data);
            }

            return this.addOrganization();
        });

        document.dispatchEvent(new CustomEvent('modelReady', {
            bubbles: true,
            cancelable: true,
            composed: true
        }));
    }

    editOrganization(organizationId) {
        this.changeFormTitle('Edit Organization');
    }

    addOrganization() {
        console.log(this.model.name);
        this.changeFormTitle('Add Organization');
    }

    changeFormTitle(title) {
        const h1 = this._element.querySelector('h1');
        h1.innerHTML = title;
    }
}
