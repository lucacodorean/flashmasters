import {Bundle, mapToBundleModel} from "./bundle";
import {Card, mapToCardModel} from "./card";

export interface Question {
    type: string;
    id: string;
    attributes: {
        text: string;
        correct: number;
        answers: Record<string, string>;
        createdAt: Date;
        updatedAt: Date;
    };
    relationships: {
        cards: Card[]
        bundles: Bundle[];
    };
    links: {
        parent: string;
        self: string;
    };
}

export const mapToQuestionModel = (data: any): Question => ({
    type: data.type,
    id:     data.id,
    attributes: {
        text:             data.attributes.text,
        correct:          data.attributes.correct,
        answers:          data.attributes.answers,
        createdAt: new Date(data.attributes.created_at),
        updatedAt: new Date(data.attributes.updated_at),
    },
    relationships: {
        cards:     data.relationships.cards     ? data.relationships.cards.map(mapToCardModel) : [],
        bundles:   data.relationships.bundles   ? data.relationships.bundles.map(mapToBundleModel) : [],
    },
    links: data.links,
});
