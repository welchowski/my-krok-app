import { NavLink } from 'react-router-dom';
import './lectionRun.css'; // або назви файл як хочеш
import './audio-player.css'
import { AudioPlayer } from 'react-audio-play'
import TestQuestions from './TestQuestions';


export default function FlashCard() {

  // Твої реальні дані після тесту









  return (

    <div className="tailwind css-myl2ny css-10v5rb">
      <div className="min-h-screen">
        <div className="min-h-screen p-6 bg_base">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-6">
              <div className="flex-1">
                <div className="max-w-4xl mx-auto">
                  <NavLink to="/dashboard/module" className="mb-6 px-6 py-3 rounded-xl flex items-center gap-2 text-gray-900 bg-gray-100 border border-gray-200">
                    <svg className="lucide lucide-arrow-left w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="m12 19-7-7 7-7" />
                      <path d="M19 12H5" />
                    </svg>
                    Назад
                  </NavLink>
                  <h1 className="text-4xl mb-8 text-gray-900">
                    Анатомія серця: Повний курс
                  </h1>
                  <div className="bg-white rounded-2xl shadow-lg p-8">

                   
                      <div >

                        <div className="audio-player-wrapper">
                          <AudioPlayer
                            src="/audio/audioh.mp3"
                            loop
                            preload="auto"
                            className="modern-audio-player"
                          />

                        </div>
                        <p className="text-sm opacity-60 mt-2 mb-2">
                          Аудіо взято для демо версії з YouTube каналу "Вербич Іван | Анатомія людини"
                        </p>
                      </div>
                    

                  </div>
                  <TestQuestions></TestQuestions>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>



  )
}