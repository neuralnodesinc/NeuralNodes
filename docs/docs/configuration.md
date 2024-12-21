# Configuration

NeuralNodes starts with a sensible default configuration that you can override
either by setting environment variables or by passing command-line arguments.
This documentation will guide you through the available configuration options.

## Receiver Authentication

NeuralNodes allows you to configure authentication for the communication between
the client and the Receiver Server. NeuralNodes uses a simple secret key mechanism
to authenticate the client, and by default, authentication is disabled.

To enable authentication, simply set the `NeuralNodes_SECRET` environment variable
to your secret key before starting the server. If you are running NeuralNodes in a
Docker container, this is how you can set the secret key:

```bash
docker run -e NeuralNodes_SECRET=secretkey ...
```

When authentication is enabled, you must provide the secret key when
initializing the client to ensure that the client can authenticate and
communicate with the Receiver Server.

=== "Python"

    ```python
    from NeuralNodespy import NeuralNodes
    NeuralNodes = NeuralNodes(secret="secretkey")
    ```

## Auto Approval

There are times when an approver is not available to approve an action call. By
default, NeuralNodes will return an error response with unavailable status code. If
you want to automatically approve all actions when no approver is available, you
can enable the auto-approval feature by setting the `NeuralNodes_AUTO_APPROVAL`
environment variable to true.

```bash
docker run -e NeuralNodes_AUTO_APPROVAL=true ...
```

!!! warning

    Enabling auto-approval is not recommended for production environments.
