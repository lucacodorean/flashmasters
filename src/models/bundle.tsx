import {mapToUserModel, User} from "./user";
import {mapToQuestionModel, Question} from "./question";

export interface Bundle {
    type: string;
    id: string;
    attributes: {
        name:           string;
        description:    string;
        price:          number;
        priceId:        string;
        productId:      string;
        createdAt:      Date;
        updatedAt:      Date;
    };
    relationships: {
        users:          User[];
        questions:      Question[];
    };
    links: {
        parent: string;
        self: string;
    };
}

export const mapToBundleModel = (data: any): Bundle => ({
    type: data.type,
    id:     data.id,
    attributes: {
        name:             data.attributes.name,
        description:      data.attributes.description,
        price:            data.attributes.price,
        priceId:          data.attributes.price_id,
        productId:        data.attributes.product_id,
        createdAt: new Date(data.attributes.created_at),
        updatedAt: new Date(data.attributes.updated_at),
    },
    relationships: {
        users:     data.relationships.users     ? data.relationships.users.data.map(mapToUserModel) : [],
        questions: data.relationships.questions ? data.relationships.questions.data.map(mapToQuestionModel) : [],
    },
    links: data.links,
});

