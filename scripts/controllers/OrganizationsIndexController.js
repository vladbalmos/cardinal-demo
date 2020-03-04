import BindableController from "./base-controllers/BindableController.js";

export default class OrganizationsIndexController extends BindableController {

    constructor(element) {
        super(element);
        this.model = this.setModel({
            organizations: [
                {
                    name: 'Test',
                    id: 1,
                    endpoint: ''
                },
                {
                    name: 'Code932',
                    id: 2,
                    endpoint: ''
                },
                {
                    name: 'UAIC',
                    id: 3,
                    endpoint: ''
                }
            ]
        });

        this.receive('edit-organization', (e) => {
            e.stopImmediatePropagation();
            const organization = {};

            for (let org of this.model.organizations) {
                if (org.id == e.data) {
                    document.dispatchEvent(new CustomEvent('edit-organization', {
                        detail: {
                            id: org.id,
                            name: org.name,
                            endpoint: org.endpoint
                        }
                    }));
                }
            }


        })

        document.addEventListener('save-organization', (e) => {
            const data = e.detail;

            const orgData = {
                name: data.name.value,
                endpoint: data.endpoint.value,
            };
            console.log(this.model.organizations);

            if (data.id) {
                orgData.id = data.id;
                for (let i = 0; i < this.model.organizations.length; i++) {
                    const org = this.model.organizations[i];
                    if (org.id == data.id) {
                        this.model.organizations[i] = orgData;
                    }
                }
                return;
            }
            orgData.id = this.model.organizations.length + 1;
            this.model.organizations.push(orgData);
        });
    }

}
