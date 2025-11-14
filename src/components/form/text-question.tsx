import './index.scss'
import type { IQuestion } from '../../data/questions'


type TextQuestionProps = {
    question: IQuestion;
    updateAnswer: (questionId: string, value: string | number) => void;
    answers: Record<string, string | number>
}
export const TextQuestion = ({ question, updateAnswer, answers }: TextQuestionProps) => {

    return (
        <div className="text-question">
            <label>
                {question.label}
            </label>
            <input type="text" placeholder={question.placeholder!}
                value={answers[question?.id] || ""}
                id={question.id}
                onChange={(e) => {
                    updateAnswer(question.id, e.target.value)
                }}
            />
        </div>
    )
}
