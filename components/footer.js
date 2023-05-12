
export default function Footer ({reports}) {

    return (
        <>
            <footer className="bg-green-500 px-10 py-5 font-semibold h-36 flex items-center justify-center text-3xl">
                {reports.length} Locations World Wide
            </footer>
        </>
        )
    }