import { useState } from 'react'
import { useRoomId } from '../hooks/useRoomId'
import { CopyIcon } from 'lucide-react'
import { toast } from 'sonner'
import { WebSocketMessage } from '../hooks/useWebSocket'

interface JoinCreateProps {
    connectionStatus: string
    onCreateRoom: () => void
    sendMessage: (message: WebSocketMessage) => void
}

export default function JoinCreate({ connectionStatus, onCreateRoom, sendMessage }: JoinCreateProps) {
    const [roomCode, setRoomCode] = useState('')
    const [username, setUsername] = useState('')
    const { currentRoomId } = useRoomId()

    const handleJoinRoom = () => {
        if (!roomCode) {
            return toast.error('Room Code required')
        }
        if (!username) {
            return toast.error('Username required')
        }
        sendMessage({ type: 'join', payload: { username, roomId: roomCode } })
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(currentRoomId)
        toast.success("Room Code Copied successfully")
    }

    return (
        <div className="space-y-4 w-[40vw] max-sm:w-full">
            <div className='text-sm'>Connection status: {connectionStatus}</div>
            <div className="flex flex-col space-y-2 pb-4">
                <input
                    type="text"
                    placeholder="Room Code"
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value)}
                    className="border border-slate-600 bg-slate-800 text-gray-300 placeholder-gray-400 h-10 px-5 rounded-lg text-sm focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="border border-slate-600 bg-slate-800 text-gray-300 placeholder-gray-400 h-10 px-5 rounded-lg text-sm focus:outline-none"
                />
                <button
                    onClick={handleJoinRoom}
                    className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded max-sm:rounded-lg"
                    disabled={connectionStatus !== 'connected'}
                >
                    Join Room
                </button>
            </div>
            <hr className='opacity-30 dark:opacity-50 rounded-full' />
            <div className="pt-4 text-center">
                <button
                    onClick={onCreateRoom}
                    className="cursor-pointer hover:bg-[#1E41B2] bg-blue-600 w-full text-white py-2 px-4 rounded max-sm:rounded-lg transition-all duration-500"
                    disabled={connectionStatus !== 'connected'}
                >
                    Create Room
                </button>
                {currentRoomId && (
                    <div className="mt-2 p-2 rounded flex flex-col">
                        <span className='opacity-70 text-sm'>Share this code with anyone to invite them to join the room</span>
                        <div className="flex justify-center items-center space-x-1 mt-1 cursor-pointer" onClick={copyToClipboard}>
                            <span className="text-xl font-semibold">{currentRoomId}</span>
                            <span><CopyIcon className='h-4 w-4' /></span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
