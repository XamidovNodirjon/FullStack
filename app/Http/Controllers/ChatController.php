<?php

namespace App\Http\Controllers;

use App\Events\ChatMessageSent;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function sendMessage(Request $request)
    {
        $message = $request->input('message');
        $user = Auth::user();

        broadcast(new ChatMessageSent($message, $user))->toOthers();

        return response()->json(['status' => 'Message sent successfully']);
    }

}
