import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the @jupyterlab-examples/hello-world extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyter-libyt/frontend:plugin',
  description: 'A JupyterLab extension for libyt.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log("[jupyter_libyt] frontend extension activated", app);
  }
};

export default plugin;
