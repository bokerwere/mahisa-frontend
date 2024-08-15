import {Spinner} from "@/components";

const LoadingButton = ({ onClick, children, loading = false}) => {
    return (
        <button
            type="submit"
            onClick={onClick}
            className={`w-[300px] p-[14px] cursor-pointer bg-primary rounded-[5px] text-[#eee] font-bold hover:bg-primary-light`}
        >
            {loading ? (
                <div className="flex items-center justify-center gap-3">
                    <Spinner />
                    <span className="text-[#fff] inline-block font-bold">Loading...</span>
                </div>
            ) : (
                <span>{children}</span>
            )}
        </button>
    )
}

export default LoadingButton