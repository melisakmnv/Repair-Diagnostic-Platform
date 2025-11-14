import { question_sections } from "../../../data/questions"
import { ProgressBar } from "../../progress-bar"
import './index.scss'

type SurveySectionProps = {
    progress: number;
}
export const SurveySection = ({ progress }: SurveySectionProps) => {
    return (
        <div className="survey-section-wrapper">
            <h4 className="survey-section-header">Votre parcours</h4>
            <div className="survey-section-content-wrapper">
                <ProgressBar direction={"vertical"}
                    progress={progress}
                    // color="#00BFA6"
                    color={"#4754FF"}
                    width={8}
                />
                <div className="survey-section-content">
                    {question_sections.map((section) => (
                        <div key={section.id}>
                            <p className="survey-section">{section.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
