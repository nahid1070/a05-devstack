import { use, useState } from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import SelectedStacks from "./SelectedStacks";
import { toast } from "react-toastify";


export interface TechnologiesProps {
    techDataPromise: Promise<Technology[]>;
}

function Technologies({ techDataPromise } : TechnologiesProps ) {

    // Getting the Technologies Data in Array
    const allTechData = use(techDataPromise)

    // useState - to display selected stack on the right side
    const [saveStack, setSaveStack] = useState<Technology[]>([]);

    // Getting Selected Stack
    const handleStackData = (stackInfo : Technology) : void => {

        // Prevent Duplicate Selection
        const exsit = saveStack.some( 
            stack => stack.id === stackInfo.id 
        );
        
        if (exsit) {

           toast.warning(`Already Added!`);

        } else {

            const newStackData = [...saveStack, stackInfo]
            setSaveStack(newStackData);

            // Toaster - Success Notification
            toast.success(`${stackInfo.name} added to the Stack`);

        }
    }

    // Handler to Delete Stack
    const handleDeleteStack = (deleteStack : Technology) : void => {

        const exsit = saveStack.find( stack => stack.id === deleteStack.id );

        if (exsit) {
            const availableSelectedStack = saveStack.filter( stack => stack.id !== deleteStack.id );
            setSaveStack(availableSelectedStack);

            // Toaster
            toast.error(` ${deleteStack.name} Stack Removed`);


        }

    }

    // Handler - Delete All Stacks 
    const handleDeleteAll = () : void => {

        if (saveStack.length !== 0) {

            setSaveStack([]);
            toast.error('All Stack Removed');

        } else {
            toast.warning('No Stack to Removed');
        }
        
    }

    // Stack Counter or length
    const stackCount = saveStack.length;


    return (
        <>
            <section className="container mx-auto px-2 sm:px-0">
                {/* Section Title */}
                <div>
                    <h2 className="font-Inter font-extrabold text-[24px] sm:text-4xl 
                        text-center lg:text-left">
                        Explore the  
                        <span className="bg-linear-to-r from-brand-btn-pink to-brand-purple 
                            bg-clip-text text-transparent"> 
                            Technologies
                        </span>
                    </h2>
                    <p className="text-brand-text pt-2 text-center lg:text-left">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                {/* Grid - Technologies Cards */}
                <div className="grid grid-cols-1 xl:grid-cols-4 md:px-7 lg:px-0 gap-5 mt-5">

                    {/* Technologies Card Items */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:col-span-3 
                        gap-4 my-7 md:order-2 lg:order-1">
                        { allTechData.map( techData => 
                            
                            <TechnologyCard 
                                key={techData.id} 
                                techData={techData} 
                                handleStackData={handleStackData}
                                saveStack={saveStack}
                            />)
                        }
                    </div>

                    {/* Your Stack Sidebar */}
                    <div className="col-span-1 xl:col-span-1 md:order-1 lg:order-2">

                        <div className="card bg-base-100 shadow-sm p-5 mt-6">

                            <h2 className="font-bold">Your Stack</h2>
                            <p className="text-brand-side-stack tracking-wide">
                                { stackCount ? `${stackCount} Technology Selected` : 
                                'No technologies selected yet.' }
                            </p>

                            {
                            
                                stackCount === 0 && (
                                <div className="text-brand-side-stack border border-dotted 
                                    border-brand-side-stack rounded-2xl text-center tracking-wide
                                    p-7 my-3">
                                    Your stack is empty.
                                </div>
                                )
                            }

                            {
                                saveStack.map( stack => 
                                    <SelectedStacks 
                                        key={stack.id} 
                                        stack={stack} 
                                        handleDeleteStack={handleDeleteStack}
                                    /> )
                            }


                            {
                                stackCount !== 0 && (
                                    <button
                                        onClick={handleDeleteAll}
                                        className="btn btn-error btn-outline rounded-[10px] mt-15 
                                        hover:text-white">
                                        Remove All
                                    </button>
                                )
                            }

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}


export default Technologies;