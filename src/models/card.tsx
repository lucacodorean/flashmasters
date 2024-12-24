import {mapToQuestionModel, Question} from "./question";

export interface Card {
    type: string;
    id: string;
    attributes: {
        text: string;
        createdAt: Date;
        updatedAt: Date;
    };
    relationships: {
        images:      string[];
        questions: Question[];
    };
    links: {
        parent: string;
        self: string;
    };
}

export const mapToCardModel = (data: any): Card => ({
    type:   data.type,
    id:     data.id,
    attributes: {
        text:      data.attributes.text,
        createdAt: new Date(data.attributes.created_at),
        updatedAt: new Date(data.attributes.updated_at),
    },
    relationships: {
        images:    data.relationships.images ?    data.relationships.images : [],
        questions: data.relationships.questions ? data.relationships.questions.data.map(mapToQuestionModel) : [],
    },
    links: data.links,
});
