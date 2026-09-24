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

    // Has Stack available or not
    const hasSaveStack = saveStack.length;


    return (
        <>
            <section className="container mx-auto px-2 sm:px-0">
                {/* Section Title */}
                <div>
                    <h2 className="font-Inter font-extrabold text-[24px] sm:text-4xl text-center md:text-left">
                        Explore the  
                        <span className="bg-linear-to-r from-brand-btn-pink to-brand-purple bg-clip-text text-transparent"> 
                            Technologies
                        </span>
                    </h2>
                    <p className="text-brand-text pt-2 text-center sm:text-left">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-4 mt-5 gap-5">

                    {/* Technologies Card Items */}
                    <div className="grid md:grid-cols-2 md:col-span-4 xl:grid-cols-3 xl:col-span-3 gap-4 my-7 ">
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
                    <div className="col-span-1 md:col-span-2 xl:col-span-1">

                        <div className="card bg-base-100 shadow-sm p-6 mt-6">

                            <h2 className="font-bold">Your Stack</h2>
                            <p className="text-brand-text">
                                { hasSaveStack ? `${hasSaveStack} Technology Selected` : 'No technologies selected yet.' }
                            </p>

                            {
                                saveStack.map( stack => 
                                    <SelectedStacks 
                                        key={stack.id} 
                                        stack={stack} 
                                        handleDeleteStack={handleDeleteStack}
                                    /> )
                            }


                            <button
                                onClick={handleDeleteAll}
                                className="btn btn-error btn-outline rounded-[10px] mt-15 hover:text-white">
                                    Remove All
                            </button>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}


export default Technologies;