import { DaffInheritableError } from '@daffodil/core';
export class DaffBadInputError extends DaffInheritableError {
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_BAD_INPUT';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLWlucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2RyaXZlci8iLCJzb3VyY2VzIjpbImVycm9ycy9iYWQtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFhLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsTUFBTSxPQUFPLGlCQUFrQixTQUFRLG9CQUFvQjtJQUcxRCxZQUFtQixPQUFlO1FBQ2pDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURHLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGakIsU0FBSSxHQUFXLGdCQUFnQixDQUFDO0lBSWpELENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZFcnJvciwgRGFmZkluaGVyaXRhYmxlRXJyb3IgfSBmcm9tICdAZGFmZm9kaWwvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBEYWZmQmFkSW5wdXRFcnJvciBleHRlbmRzIERhZmZJbmhlcml0YWJsZUVycm9yIGltcGxlbWVudHMgRGFmZkVycm9yIHtcbiAgcHVibGljIHJlYWRvbmx5IGNvZGU6IHN0cmluZyA9ICdEQUZGX0JBRF9JTlBVVCc7XG5cblx0Y29uc3RydWN0b3IocHVibGljIG1lc3NhZ2U6IHN0cmluZykge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHR9XG59XG4iXX0=