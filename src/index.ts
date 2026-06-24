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

const NAME = "media-keys"
const subCommands = {
  play: keyCommand("play", "Toggle play/pause"),
  next: keyCommand("next", "Skip to the next track"),
  previous: keyCommand("previous", "Go to the previous track"),
  forward: keyCommand("forward", "Fast-forward within the current track"),
  rewind: keyCommand("rewind", "Rewind within the current track"),
}

const main = defineCommand({
  meta: {
    name: NAME,
    description: "Send macOS system media keys to the active player",
  },
  subCommands,
  run: ({ rawArgs }) => {
    if (rawArgs.some((arg) => arg in subCommands)) return
    console.log(
      `Usage: ${NAME} <command>\nRun \`${NAME} --help\` to list commands.`,
    )
  },
})

runMain(main)
