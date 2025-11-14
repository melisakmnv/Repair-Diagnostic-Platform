
import './index.scss'

export const SurveyNavbar = () => {
    return (
        <div className='survey-nav-wrapper'>
            <div className='survey-nav-left'>
                <div className='logo'>
                    Diagnostic  🛠️
                </div>
            </div>
            <div className='survey-nav-right'>
                <button className='btn btn-outline'>
                    Contacter un expert
                </button>
                <button className='btn btn-primary'>
                    Se connecter
                </button>
            </div>
        </div>
    )
}
