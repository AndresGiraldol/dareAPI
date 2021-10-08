class ApiError extends Error {
    private statusCode: number;

    private messageError: string;

    private error: string;

    constructor(statusCode: number, message: any, error: any) {
      super(message);
      this.statusCode = statusCode;
      this.messageError = message;
      this.error = error;
    }

    public getError() {
      return {
        code: this.statusCode,
        message: `${this.error} - ${this.messageError}`,
      };
    }
}

export default ApiError;