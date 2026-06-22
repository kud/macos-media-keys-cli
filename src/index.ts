import { defineCommand, runMain } from "citty"
import { type MediaKey, sendMediaKey } from "@kud/macos-media-keys"

const keyCommand = (key: MediaKey, description: string) =>
  defineCommand({
    meta: { name: key, description },
    run: async () => {
      try {
        await sendMediaKey(key)
      } catch (error) {
        console.error((error as Error).message)
        process.exit(1)
      }
    },
  })

const main = defineCommand({
  meta: {
    name: "media-keys",
    description: "Send macOS system media keys to the active player",
  },
  subCommands: {
    play: keyCommand("play", "Toggle play/pause"),
    next: keyCommand("next", "Skip to the next track"),
    previous: keyCommand("previous", "Go to the previous track"),
    forward: keyCommand("forward", "Fast-forward within the current track"),
    rewind: keyCommand("rewind", "Rewind within the current track"),
  },
})

runMain(main)
