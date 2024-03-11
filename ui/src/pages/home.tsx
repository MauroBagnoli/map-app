import MapView from "@/components/layout/map-view";

function Home() {
    return (
        <main className="flex flex-col h-screen">
            <div className="flex justify-center px-4">
                <div className="w-full max-w-screen-lg">
                    <h2 className="pt-4 pb-4 text-2xl font-semibold tracking-tight scroll-m-20">
                        Device locations
                    </h2>
                </div>
            </div>
            <MapView />
        </main>
    );
}

export default Home;
