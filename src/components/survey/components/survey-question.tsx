
import type { IQuestion } from '../../../data/questions'
import { ChoiceQuestion } from '../../form/choice-question'
import { TextQuestion } from '../../form/text-question'
import { NumericQuestion } from '../../form/numeric-question'
import './index.scss'
import { FormQuestion } from '../../form/form-question'


type SurveyQuestionProps = {
    question: IQuestion
    updateAnswer: (questionId: string, value: string | number) => void;
    answers: Record<string, string | number>
}

export const SurveyQuestion = ({ question, updateAnswer, answers }: SurveyQuestionProps) => {


    const renderQuestionType = () => {

        const sharedProps = { question, updateAnswer, answers }

        switch (question.answerType) {
            case "CHOICE":
                return <ChoiceQuestion {...sharedProps} />;
            case "NUMERIC":
                return <NumericQuestion {...sharedProps} />;
            case "TEXT":
                return <TextQuestion {...sharedProps} />
            case "FORM":
                return <FormQuestion {...sharedProps} />

            default:
                return null
        }
    }

    return (
        <div className="question-wrapper">
            <div className="question-header">
                <h3>{question.questionLabel}</h3>
                <p>{question.questionDescription}</p>
            </div>
            <div className="question-content">
                {renderQuestionType()}
            </div>
        </div>
    )
}