import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffProduct } from '@daffodil/product';
import { DaffProductServiceInterface } from '@daffodil/product/driver';

/**
 * The product inmemory driver to mock the product backend service.
 *
 * @inheritdoc
 * @Param HttpClient
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryProductService implements DaffProductServiceInterface {
	/**
	 * @docs-private
	 */
  url = '/api/products/';

  constructor(private http: HttpClient) {}

  /**
   * Gets all products.
   *
   * @returns An Observable of DaffProduct[]
   */
  getAll(): Observable<DaffProduct[]> {
    return this.http.get<DaffProduct[]>(this.url);
  }

  /**
   * Gets all best selling products.
   *
   * @returns An Observable of DaffProduct[]
   */
  getBestSellers(): Observable<DaffProduct[]> {
    return this.http.get<DaffProduct[]>(this.url + 'best-sellers');
  }

  /**
   * Get a product by ID.
   *
   * @param productId string - product ID
   * @returns An Observable of a DaffProduct
   */
  get(productId: DaffProduct['id']): Observable<DaffProduct> {
    return this.http.get<DaffProduct>(this.url + productId);
  }

	/**
	 * Get a product by url.
	 */
  getByUrl(url: DaffProduct['url']): Observable<DaffProduct> {
    return this.http.get<DaffProduct>(`${this.url}${url}`);
  }
}
