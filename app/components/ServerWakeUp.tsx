'use client'

import { Spinner } from '@/components/ui/spinner'

interface ServerWakeUpProps {
    isDarkMode?: boolean
}

export default function ServerWakeUp({ isDarkMode = true }: ServerWakeUpProps) {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center p-8">
            <div className="text-center space-y-6 max-w-md">
                <div className="flex justify-center">
                    <Spinner size="large" className="text-[#01ff04]" />
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold">
                        Waking up the server...
                    </h2>
                    <p className="text-sm opacity-70">
                        The server is hosted on Render's free tier and goes to sleep after inactivity.
                        <br />
                        It usually takes <span className="font-semibold text-[#01ff04]">30-60 seconds</span> to wake up.
                        <br />
                        Please wait, we're connecting you...
                    </p>
                </div>

                <div className="pt-4">
                    <div className="inline-flex items-center gap-2 text-xs opacity-50">
                        <div className="h-2 w-2 rounded-full bg-[#01ff04] animate-pulse" />
                        <span>Connecting to Socket.IO server</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
