// src/utils/commandInterpreter.js

/**
 * Interprets and handles a user's text command.
 * This is a rule-based system for actionable commands.
 * @param {string} input - The user's typed command
 * @returns {{ message: string }} - Response message
 */
export function handleCommand(input) {
  const lower = input.toLowerCase().trim();

  // Example patterns
  if (lower === "add a new project") {
    return { message: "To add a new project, go to the Projects page and click 'Add Project'." };
  }

  if (lower.startsWith("add project ")) {
    const title = input.slice(12).trim();
    if (title) {
      return { message: `Creating project "${title}" is not yet automated. Please use the form.` };
    }
  }

  if (lower === "list all tasks") {
    return { message: "Navigate to any project and view its task list." };
  }

  if (lower.startsWith("mark task ")) {
    const taskMatch = lower.match(/mark task (\d+|#[a-z0-9]+) as (done|completed|complete)/);
    if (taskMatch) {
      const taskId = taskMatch[1];
      return { message: `Marking task ${taskId} as completed is not yet supported via AI.` };
    }
  }

  if (lower.includes("project progress")) {
    return { message: "Check the Dashboard to view overall project progress." };
  }

  // Fallback
  return { message: "Sorry, I didn’t understand that. Try a command like 'Add a new project' or 'List all tasks'." };
}
