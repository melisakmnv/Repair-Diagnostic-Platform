import './survey.scss'
import { SurveyNavbar } from "./components/survey-nav"
import { ProgressBar } from '../progress-bar'
import { SurveyQuestion } from './components/survey-question'
import { useState, type FormEvent } from 'react'
import { question_sections, questions, type IQuestion } from '../../data/questions'
import { useLocalStorage } from '../../hooks/useLocalstorage'
import { SurveySection } from './components/survey-section'
import { SurveySummary } from './components/survey-summary'

export const Survey = () => {

    const allQuestions: IQuestion[] = [...questions]
    const [currentQuestion, set_currentQuestion] = useState<IQuestion>(allQuestions[0])
    const [history, set_history] = useState<IQuestion[]>([])
    const [answers, set_answers] = useLocalStorage<Record<string, string | number>>('answers', {});
    const [showSummary, set_showSummary] = useState<Boolean>(false)

    const currentQuestionIndex = allQuestions.findIndex(q => q.id === currentQuestion.id);
    const currentSectionIndex = question_sections.findIndex((section) => section.section === currentQuestion.section)
    const question_progress = ((currentQuestionIndex + 1) / allQuestions.length) * 100;
    const section_progress = ((currentSectionIndex + 1) / question_sections.length) * 100;

    const isLastQuestion = currentQuestion.isLast

    function updateCurrentQuestion(nextQuestionId: string) {
        set_history([...history, currentQuestion])
        const found = allQuestions.find(q => q.id === nextQuestionId);
        if (found) set_currentQuestion(found);
    }

    function updateAnswer(questionId: string, value: string | number) {
        set_answers((prev) => ({ ...prev, [questionId]: value }))
    }

    function handleNextQuestion(e: FormEvent) {
        e.preventDefault();

        if (currentQuestion.isLast) {
            set_history([...history, currentQuestion])
            set_showSummary(true);
            return;
        }

        const choiceQuestion = currentQuestion.answers.find((ans) => ans.value === answers![currentQuestion.id])
        const textQuestion = currentQuestion.answers.find((ans) => ans.nextQuestionId)
        const nextQuestionId = currentQuestion.answerType === "CHOICE" ? choiceQuestion?.nextQuestionId : textQuestion?.nextQuestionId
        if (nextQuestionId) updateCurrentQuestion(nextQuestionId)
    }

    function handlePreviousQuestion(e: FormEvent) {
        e.preventDefault();
        const currentQuestion = history.pop()
        if (!currentQuestion) return
        else set_currentQuestion(currentQuestion)
    }

    if (showSummary) {
        return (
            <div className='survey-wrapper'>
                <button
                    className='btn btn-text'
                    onClick={() => set_showSummary(false)}
                >
                    {`<< Retour`}
                </button>
                <div className='survey-summary-wrapper'>
                    <SurveySummary answers={answers!} history={history} />
                </div>
            </div>
        )
    }

    return (
        <div className='survey-wrapper'>
            <SurveyNavbar />
            <div className='survey-content-wrapper'>
                <div className='survey-content-left'>
                    <SurveySection progress={section_progress} />
                </div>
                <div className='survey-content-right'>
                    <div className='content-header'>
                        <ProgressBar progress={question_progress} color={"#4754FF"} height={8} />
                        <button
                            className='btn btn-text'
                            disabled={!history.length}
                            onClick={handlePreviousQuestion}>{`<< Précédent`}</button>
                    </div>
                    <div className='content'>

                        <SurveyQuestion question={currentQuestion} updateAnswer={updateAnswer} answers={answers!} />
                    </div>
                    <div className='content-footer'>
                        <button
                            className='btn btn-primary btn-lg'
                            disabled={answers?.[currentQuestion.id] == null}
                            onClick={handleNextQuestion}>{isLastQuestion ? "Voir mon devis" : "Continue"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
