import type { IQuestion } from '../../data/questions';
import './index.scss';

type ChoiceQuestionProps = {
    question: IQuestion;
    updateAnswer: (questionId: string, value: string | number) => void;
    answers: Record<string, string | number>
}
export const ChoiceQuestion = ({ question, updateAnswer, answers }: ChoiceQuestionProps) => {

    return (
        <div className="choice-question">
            <div className='choice-wrapper'>
                {
                    question.answers.map((answer) => {
                        return (
                            <div key={answer.value} className='texttt'>
                                <input
                                    type="radio"
                                    id={answer.value as string}
                                    name={question.id}
                                    value={answer.value}
                                    checked={answers[question.id] === answer.value}
                                    onChange={() => {
                                        updateAnswer(question.id, answer.value)
                                    }}
                                />
                                <label htmlFor={answer.value as string} className="choice">
                                    <span>{answer.value}</span>
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
