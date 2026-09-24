import { FaCheck, FaStar } from "react-icons/fa";
import type { Technology } from "../types/technology";

export interface TechData {
    techData: Technology;
    handleStackData: (stackInfo : Technology) => void;
    saveStack: Technology[];
}

function TechnologyCard( { techData, handleStackData, saveStack } : TechData) {

   const activeCard = saveStack.some( 
            stack => stack.id === techData.id 
    );


    return (
        <>
            <div className={`card bg-base-100 shadow-sm ${ activeCard && 'border border-brand-btn-orange'}`}>

                <div className="card-body p-6">
                    <div className="badge badge-soft badge-primary font-semibold absolute top-3 right-3">
                        { techData.badge }
                    </div>
                    {/* Icon */}
                    <img src={ techData.icon } alt="" className="w-8" />

                    <h2 className="card-title text-2xl">{ techData.name }</h2>
                    <p className="text-brand-text">
                        { techData.description }
                    </p>

                    <div className="flex justify-between py-3 gap-4 items-center border-t border-[#F8FAFC]">
                        <p className="bg-gray rounded-[10px] text-center p-2">
                            { techData.category }
                        </p>

                        <p>{ techData.difficulty }</p>
                        
                        <p className="flex items-center">
                            <FaStar className="text-star-gold mr-1 -mt-0.5" />
                            { techData.rating }
                        </p>
                    </div>
                    
                    {/* Card Button */}
                    <div className="card-actions">

                        <button
                        
                            onClick={ 
                                () => {
                                    handleStackData(techData);
                                }
                            }
                            className={` flex items-center justify-center gap-2 bg-brand-black ${activeCard ? 'bg-linear-to-r from-brand-btn-orange to-brand-btn-pink' : ''} text-white 
                            btn-block font-light rounded-[10px] p-3 
                            ${activeCard ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                            {activeCard ? <FaCheck /> : ''} Add to Stack
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
}

export default TechnologyCard;