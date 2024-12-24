export interface Role {
    id: string;
    name: string;
}

export const mapToRoleModel = (data: any): Role => ({
    id:    data.id,
    name:  data.attributes.name,
});
