import { RxCross1 } from "react-icons/rx";
import type { Technology } from "../types/technology";

interface SelectedStacks {
    stack: Technology;
    handleDeleteStack: (deleteStack : Technology) => void;
}

function SelectedStacks( { stack, handleDeleteStack } : SelectedStacks ) {


    return (
        <div className="flex items-center gap-3 border border-brand-stack-border rounded-[10px] p-3 mt-3 relative">
            <img src={stack.icon} alt="Stack Icon" width='50px' />
            <div>
                <h4 className="font-bold">{stack.name}</h4>
                <h5 className="text-[12px] text-brand-text">{stack.category}</h5>
            </div>
            
            <button onClick={() => handleDeleteStack(stack)} className="btn absolute right-2 bg-transparent p-1 border-0">
                <RxCross1 className="text-2xl text-brand-stack-border" />
            </button>
        </div>
    )
}


export default SelectedStacks;