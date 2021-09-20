import * as vscode from "vscode";

const fileSystemWatcher = vscode.workspace.createFileSystemWatcher(
  "**/*/package.json",
  false,
  false,
  false
);

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "watch-package-json.watchPackageJson",
    () => {
      const terminal = vscode.window.createTerminal("watch-package-json");
      fileSystemWatcher.onDidChange(async () => {
        terminal.sendText("npm install");
      });
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
