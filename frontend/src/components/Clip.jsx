import React from 'react'

const Clip = () => {
  return (
    <div>
        <div className="min-h-screen  text-black-800">
            {/* Hero Section */}
            <div className="bg-black-600 p-6 md:p-6 text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white/30">
                ADD MAGIC TO YOUR OWN APPS WITH THE CLIPDROP API
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                The Clipdrop API allows you to integrate best-in-class AI into your apps in minutes.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="https://clipdrop.co/apis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    >
                        Get started with the Clipdrop API
                    </a>
                    <a
                        href="https://github.com/initml/clipdrop-api-samples"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-800 text-gray-800 hover:bg-gray-200 font-semibold py-2 px-4 rounded"
                    >
                        Open source Demos
                    </a>
                </div>
            </div>

            <section className="pt-4 md:p-6 flex justify-center">
                <img
                    src="https://assets.reactbricks.com/G-dH90DZVcB0SiT/images/original/S4sud6tlSFZWo50/clipdrop-api.webp"
                    srcSet="
                        https://assets.reactbricks.com/G-dH90DZVcB0SiT/images/src_set/S4sud6tlSFZWo50-2000/clipdrop-api.webp 2000w,
                        https://assets.reactbricks.com/G-dH90DZVcB0SiT/images/src_set/S4sud6tlSFZWo50-1500/clipdrop-api.webp 1500w,
                        https://assets.reactbricks.com/G-dH90DZVcB0SiT/images/src_set/S4sud6tlSFZWo50-1000/clipdrop-api.webp 1000w,
                        https://assets.reactbricks.com/G-dH90DZVcB0SiT/images/src_set/S4sud6tlSFZWo50-500/clipdrop-api.webp 500w,
                        https://assets.reactbricks.com/G-dH90DZVcB0SiT/images/src_set/S4sud6tlSFZWo50-250/clipdrop-api.webp 250w
                    "
                    sizes="100vw"
                    alt="Clipdrop API Demos"
                    width="2766"
                    height="1621"
                    loading="lazy"
                    decoding="async"
                    className="w-full rounded-2xl object-cover"
                    fetchPriority="auto"
                />
            </section>


        </div>
    </div>
  )
}

export default Clip
