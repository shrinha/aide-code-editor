"use client";

import { useCallback, useRef, useEffect } from 'react';

interface UseAudioOptions {
  volume?: number;
  playbackRate?: number;
  enabled?: boolean;
}

export const useAudio = (audioSrc: string, options: UseAudioOptions = {}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { volume = 0.5, playbackRate = 1.0, enabled = true } = options;

  useEffect(() => {
    // Initialize audio element
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio(audioSrc);
      audioRef.current.volume = volume;
      audioRef.current.playbackRate = playbackRate;
      
      // Preload the audio
      audioRef.current.preload = 'auto';
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc, volume, playbackRate]);

  const play = useCallback(() => {
    if (!enabled || !audioRef.current) return;

    try {
      // Reset audio to beginning and play
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        // Handle autoplay restrictions
        console.warn('Audio playback failed:', error);
      });
    } catch (error) {
      console.warn('Error playing audio:', error);
    }
  }, [enabled]);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  const setVolume = useCallback((newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, newVolume));
    }
  }, []);

  return { play, stop, setVolume };
};

// Specialized hook for typing sounds with throttling
export const useTypingAudio = (audioSrc: string = '/typing-sound.mp3', options: UseAudioOptions = {}) => {
  const { play, stop, setVolume } = useAudio(audioSrc, options);
  const lastPlayTime = useRef<number>(0);
  const throttleMs = 100; // Prevent too frequent plays

  const playTypingSound = useCallback(() => {
    const now = Date.now();
    if (now - lastPlayTime.current >= throttleMs) {
      play();
      lastPlayTime.current = now;
    }
  }, [play, throttleMs]);

  return { playTypingSound, stop, setVolume };
};