import { NavLink } from 'react-router-dom';
import './test-run.css';

interface SelectvariantProps {
  buttonText?: string;
  showAudio?: boolean;
  showFlashCards?: boolean;
  showTests?: boolean;
  showLectures?: boolean;
  showVideo?: boolean;
}

export default function Selectvariant({
  buttonText = "Виберіть тип проходження матеріалу",
  showAudio = true,
  showFlashCards = true,
  showTests = true,
  showLectures = true,
  showVideo = true,
}: SelectvariantProps) {
  

  return (
    <div className="  bg_base  to-gray-100 py-5 px-4">
    <div className=" bg_base  pt-8">
          <h3 className="text-lg mb-4 text-gray-900">{buttonText}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {showVideo && (
                <NavLink
                    to="/dashboard/VideoRun"
                    className="block transition-all h over:scale-105"
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                        // или window.scrollTo(0, 0);
                    }}
                >
                    <div className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition-all">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                                <svg className="lucide lucide-play w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="6 3 20 12 6 21 6 3" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-gray-900">
                                    Відео-лекція
                                </h3>
                                <p className="text-sm text-gray-600">
                                    18:45 хвилин
                                </p>
                            </div>
                        </div>
                    </div></NavLink>
                )}
                {showFlashCards && (
                <NavLink
                    to="/dashboard/flashexample"
                    className="block transition-all h over:scale-105"
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                        // или window.scrollTo(0, 0);
                    }}
                >
                    <div className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition-all">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                <svg className="lucide lucide-credit-card w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <rect height="14" rx="2" width="20" x="2" y="5" />
                                    <line x1="2" x2="22" y1="10" y2="10" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-gray-900">
                                    Флеш-картки
                                </h3>
                                <p className="text-sm text-gray-600">
                                    5 карток
                                </p>
                            </div>
                        </div>
                    </div>
                </NavLink>
                )}
                {showLectures && (
                 <NavLink
                 to="/dashboard/lectionRun"
                    className="block transition-all h over:scale-105"
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                        // или window.scrollTo(0, 0);
                    }}>

                <div className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition-all">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                            <svg className="lucide lucide-file-text w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                <path d="M10 9H8" />
                                <path d="M16 13H8" />
                                <path d="M16 17H8" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-gray-900">
                                Лекція
                            </h3>
                            <p className="text-sm text-gray-600">
                                5 питань
                            </p>
                        </div>
                    </div>
                </div>
                 </NavLink>
                )}
                 {showAudio && (
                 <NavLink to="/dashboard/AudioRun"
                    className="block transition-all h over:scale-105"
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                        // или window.scrollTo(0, 0);
                    }}>
                <div className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition-all">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                            <svg className="lucide lucide-mic w-6 h-6 text-white"
                                fill="none" height="24" stroke="currentColor" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <line x1="12" x2="12" y1="19" y2="22" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-gray-900">
                                Аудіо
                            </h3>
                            <p className="text-sm text-gray-600">
                                18:45 хвилин
                            </p>
                        </div>
                    </div>
                </div>
                </NavLink>
                )}
                {showTests && (
                <NavLink to="/dashboard/Testexample"
                    className="block transition-all h over:scale-105"
                    onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                        // или window.scrollTo(0, 0);
                    }}>
                <div className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition-all">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br bg-yellow-400 rounded-xl flex items-center justify-center">
                            <svg className="lucide lucide-list-checks w-6 h-6 text-white"
                                fill="none" height="24" stroke="currentColor" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="m3 10 2.5 2.5L11 6" />
                                <path d="m3 17 2.5 2.5L11 13" />
                                <path d="M13 6h8" />
                                <path d="M13 13h8" />
                                <path d="M13 17h8" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-gray-900">
                                Тести
                            </h3>
                            <p className="text-sm text-gray-600">
                                5 питань
                            </p>
                        </div>
                    </div>

                </div>
                </NavLink>
                )}
            </div>
        </div></div>
  );
}