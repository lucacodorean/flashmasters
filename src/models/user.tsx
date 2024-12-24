import { Role, mapToRoleModel } from './role';
import { Bundle, mapToBundleModel } from './bundle';

export interface User {
    type:   string;
    id:     string;
    attributes: {
        name:       string;
        email:      string;
        customerId: string;
        createdAt: Date;
        updatedAt: Date;
    };
    relationships: {
        role: Role;
        bundles: Bundle[];
    };
    links: {
        parent: string;
        self: string;
    };
}

export const mapToUserModel = (data: any): User => ({
    type: data.type,
    id:     data.id,
    attributes: {
        name:       data.attributes.name,
        email:      data.attributes.email,
        customerId: data.attributes.customer_id,
        createdAt: new Date(data.attributes.created_at),
        updatedAt: new Date(data.attributes.updated_at),
    },
    relationships: {
        role:    data.relationships.role ? mapToRoleModel(data.relationships.role) : null,
        bundles: data.relationships.bundles ? data.relationships.bundles.data.map(mapToBundleModel) : [],
    },
    links: data.links,
});
