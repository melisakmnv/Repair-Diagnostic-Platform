import type { IQuestion } from "../../data/questions";
import './index.scss'

type FormQuestionProps = {
    question: IQuestion
    updateAnswer: (questionId: string, value: string | number) => void;
    answers: Record<string, string | number>
};

export const FormQuestion = ({ question, updateAnswer, answers }: FormQuestionProps) => {
    const existingAnswers = (answers[question.id]) as any || {};

    const handleChange = (fieldId: string, value: string) => {
        const newValues = { ...existingAnswers, [fieldId]: value };
        updateAnswer(question.id, newValues);
    };

    // Separate choice fields from text fields
    const choiceFields = question.fields?.filter(f => f.type === "choice") || [];
    const textFields = question.fields?.filter(f => f.type === "text") || [];

    return (
        <div className="form-question">
            <div className="form-fields">
                {/* Choice fields (radio buttons as buttons) */}
                {choiceFields.map((field) => (
                    <div key={field.id} className="form-field form-choice">
                        <label className="field-label">{field.label}</label>
                        <div className="form-choice-group">
                            {field.options?.map((opt) => (
                                <label key={opt} className="choice-option">
                                    <input
                                        type="radio"
                                        name={field.id}
                                        value={opt}
                                        checked={existingAnswers[field.id] === opt}
                                        onChange={(e) => handleChange(field.id, e.target.value)}
                                    />
                                    <span>{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Text fields in a row */}
                {textFields.length > 0 && (
                    <div className="text-fields-row">
                        {textFields.map((field) => (
                            <div key={field.id} className="form-field form-input">
                                <label className="field-label">{field.label}</label>
                                <input
                                    type="text"
                                    placeholder={field.placeholder || ""}
                                    value={existingAnswers[field.id] || ""}
                                    onChange={(e) => handleChange(field.id, e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};