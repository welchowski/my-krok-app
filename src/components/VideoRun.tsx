import { NavLink } from 'react-router-dom';
import './lectionRun.css'; // або назви файл як хочеш
import heartImage from '/videoh.png';  // або правильний відносний шлях
import TestQuestions from './TestQuestions';



export default function FlashCard() {




 


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
                    
                    <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl " >
                      <video
                        className="  object-cover w-full max-w-[1080px] aspect-[1080/1920]"
                        poster={heartImage}  // твоя картинка серця буде показуватися спочатку
                        controls             // додає кнопки play/pause, гучність, повноекранний режим
                        preload="metadata"   // швидко завантажує тільки метадані
                      >
                        <source src="/videos/anatomyheart.mp4" type="video/mp4" />
                        {/* Якщо є webm — додай */}
                        {/* <source src="/videos/your-video.webm" type="video/webm" /> */}
                        Ваш браузер не підтримує відео.
                      </video>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="px-4 py-2 rounded-full text-sm bg_base text-gray-700">
                        Тривалість:
                        18:45. Відео взято для демо версії з YouTube каналу "Вербич Іван | Анатомія людини"
                      </span>


                    </div>

                  </div>
                                    <TestQuestions showAudio={true} showFlashCards={true} showTests={false} showLectures={true} showVideo={false} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>



  )
}