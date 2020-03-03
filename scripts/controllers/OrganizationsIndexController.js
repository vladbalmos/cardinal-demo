import BindableController from "./base-controllers/BindableController.js";

export default class OrganizationsIndexController extends BindableController {

    constructor(element) {
        super(element);
        this.model = this.setModel({
            organizations: [
                {
                    name: 'Test',
                    id: 1
                },
                {
                    name: 'Code932',
                    id: 2
                },
                {
                    name: 'UAIC',
                    id: 3
                }
            ]
        });

        this.receive('manage-clusters', (e) => {
            e.stopImmediatePropagation();
            this.manageClusters(e.data);
        })
    }

    manageClusters(organizationId) {
        console.log(organizationId);
    }
}
