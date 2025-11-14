import type { IQuestion } from "../../../data/questions";
import './index.scss'

type SurveySummaryProps = {
    history: IQuestion[];
    answers: Record<string, string | number>
}

export const SurveySummary = ({ answers, history }: SurveySummaryProps) => {

    const summary1 = history
        .filter((question) => question.section === "description_projet")
        .map((question) => {
            return {
                id: question.id,
                name: question.recap,
                answer: answers[question.id.toString()],
            };
        });

    const summary2 = history
        .filter((question) => question.section === "client_information")
        .map((question) => {
            return {
                id: question.id,
                name: question.recap,
                answer: answers[question.id.toString()],
            };
        });

    const summary3 = history
        .filter((question) => question.section === "client_coordonne")
        .map((question) => {
            return {
                id: question.id,
                name: question.recap,
                answer: answers[question.id.toString()],
            };
        });


    return (
        <section className="summary">
            <div className="summary-content">
                <h2>Votre projet en détail </h2>
                {summary1.map((summary) => (
                    <div className="summary-item" key={summary.id}>
                        <p>{summary.name}</p>
                        <p>{summary.answer}</p>
                    </div>
                ))}
            </div>
            <div className="summary-content">
                <h2>Votre bien et vous</h2>
                {summary2.map((summary) => (
                    <div className="summary-item" key={summary.id}>
                        <p>{summary.name}</p>
                        <p>{summary.answer}</p>
                    </div>
                ))}
            </div>

            <div className="summary-content">
                <h2>Votre coordonnées</h2>
                {summary3.map((summary) => (
                    <div className="summary-item" key={summary.id}>
                        <p>{summary.name}</p>
                        <p>{summary.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    )
};
