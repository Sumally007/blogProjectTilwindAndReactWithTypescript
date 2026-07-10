const Modal: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({
    children,
    onClose,
}) => {
    return (
        <div className="fixed bg-black/30 backdrop-blur-sm inset-0 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow relative">
                {children}

                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 cursor-pointer">x</button>
            </div>
        </div>
    )
}

export default Modal