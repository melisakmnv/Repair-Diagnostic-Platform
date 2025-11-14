import './index.scss'
import type { IQuestion } from '../../data/questions'

type NumericQuestionProps = {
    question: IQuestion;
    updateAnswer: (questionId: string, value: string | number) => void;
    answers: Record<string, string | number>;
}

export const NumericQuestion = ({ question, updateAnswer, answers }: NumericQuestionProps) => {

    const MIN_VALUE = 1;
    const MAX_VALUE = 99;
    const DEFAULT_VALUE = question.answers[0].value as number;
    const valueNumber = (answers[question.id] as number) ?? DEFAULT_VALUE;

    function increaseValue() {
        updateAnswer(question.id, Math.min(valueNumber + 1, MAX_VALUE));
    }

    function decreaseValue() {
        updateAnswer(question.id, Math.max(valueNumber - 1, MIN_VALUE));
    }

    return (
        <div className="numeric-question">
            <button className='stepper-button' onClick={decreaseValue}>
                <span> - </span>
            </button>
            <input
                type="number"
                id={question.id}
                value={valueNumber}
                onChange={(e) => {
                    const val = Number(e.target.value);
                    updateAnswer(question.id, val);
                }}
                min={MIN_VALUE}
                max={MAX_VALUE}
            />
            <button className='stepper-button' onClick={increaseValue}>
                <span> + </span>
            </button>
        </div>
    )
}