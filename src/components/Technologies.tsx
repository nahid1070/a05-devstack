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

    // useState - to make card button disabled for selection
    const [hasAdded, setHasAdded] = useState<boolean>(false);

    // Getting Selected Stack
    const handleStackData = (stackInfo : Technology) : void => {

        // Prevent Duplicate Selection
        const exsit = saveStack.find( stack => stack.id === stackInfo.id );
        
        if (exsit) {
            // setSaveStack(stackData);

        } else {

            const newStackData = [...saveStack, stackInfo]
            setSaveStack(newStackData);

            // Stack added info
            setHasAdded(true);

        }
    }

    // Handler to Delete Stack
    const handleDeleteStack = (deleteStack : Technology) : void => {

        const exsit = saveStack.find( stack => stack.id === deleteStack.id );

        if (exsit) {
            const availableSelectedStack = saveStack.filter( stack => stack.id !== deleteStack.id );
            setSaveStack(availableSelectedStack);
            toast.error(` ${deleteStack.name} Stack Removed`);
        }

    }

    // Handler - Delete All Stacks 
    const handleDeleteAll = () => {

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
            <section className="container mx-auto">
                {/* Section Title */}
                <div>
                    <h2 className="font-Inter font-extrabold text-4xl">
                        Explore the 
                        <span className="bg-linear-to-r from-brand-btn-pink to-brand-purple bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>
                    <p className="text-brand-text pt-2">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                {/* Technologies Items */}
                <div className="grid grid-cols-4 mt-5 gap-7">

                    <div className="grid grid-cols-3 gap-7 my-7 col-span-3">
                        { allTechData.map( techData => 
                            
                            <TechnologyCard 
                                key={techData.id} 
                                techData={techData} 
                                handleStackData={handleStackData}
                                hasAdded={hasAdded}

                            />)
                        }
                    </div>

                    <div>

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