interface ModalProps {
    children: React.ReactNode,
    title: string,
    onClose: () => void
}
export function Modal({ children, title, onClose} : ModalProps) {
    return (
        <>
            <div className="fixed top-0 right-0 left-0 bottom-0 bg-black/50 " onClick={onClose}/>
            <div className="w-[500px] p-7 rounded bg-white fixed top-14 left-1/2 -translate-x-1/2">
                <h1 className="font-bold mb-4">{ title }</h1>
                { children }
            </div>
        </>
    )
}