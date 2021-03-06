import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import { GraphQLError } from 'graphql';
import { catchError } from 'rxjs/operators';

import {
  DaffLoginInfo,
  DaffAccountRegistration,
} from '@daffodil/auth';
import { createCustomerMutation } from '@daffodil/auth/driver/magento';
import { DaffAccountRegistrationFactory } from '@daffodil/auth/testing';
import { DaffBadInputError } from '@daffodil/driver';

import { DaffMagentoRegisterService } from './register.service';

describe('Driver | Magento | Auth | RegisterService', () => {
  let controller: ApolloTestingController;
  let service: DaffMagentoRegisterService;

  const registrationFactory: DaffAccountRegistrationFactory = new DaffAccountRegistrationFactory();

  let mockLoginInfo: DaffLoginInfo;
  let email: string;
  let password: string;
  let firstName: string;
  let lastName: string;
  let mockRegistration: DaffAccountRegistration;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoRegisterService,
      ],
    });

    service = TestBed.inject(DaffMagentoRegisterService);
    controller = TestBed.inject(ApolloTestingController);

    mockRegistration = registrationFactory.create();

    firstName = mockRegistration.customer.firstName;
    lastName = mockRegistration.customer.lastName;
    email = mockRegistration.customer.email;
    password = mockRegistration.password;
    mockLoginInfo = { email, password };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('register | creating a customer and getting login info', () => {
    let response;

    afterEach(() => {
      controller.verify();
    });

    describe('when the call to the Magento API is successful', () => {
      beforeEach(() => {
        response = {
          createCustomer: {
            customer: mockRegistration.customer,
          },
        };
      });

      it('should return the login info and not throw an error', done => {
        service.register(mockRegistration).subscribe(loginInfo => {
          expect(loginInfo).toEqual(mockLoginInfo);
          done();
        });

        const op = controller.expectOne(createCustomerMutation);

        op.flush({
          data: response,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a DaffBadInputError', done => {
        service.register(mockRegistration).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffBadInputError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(createCustomerMutation);

        op.graphqlErrors([new GraphQLError(
          'Required parameters are missing: First Name',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql-input' },
        )]);
      });
    });
  });
});
