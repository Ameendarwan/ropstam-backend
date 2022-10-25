const dummyCustomer={
  "customer": {
    "email": "steve.lastnameson@example.com",
    "accepts_marketing": false,
    "created_at": "2022-04-05T13:04:28-04:00",
    "updated_at": "2022-04-05T13:04:29-04:00",
    "first_name": "Steve",
    "last_name": "Lastnameson",
    "orders_count": 0,
    "state": "disabled",
    "total_spent": "0.00",
    "phone": "+15142546011",
    "addresses": [
      {
        "id": 1053317301,
        "customer_id": 1073339469,
        "first_name": "Mother",
        "last_name": "Lastnameson",
        "address1": "123 Oak St",
        "city": "Ottawa",
        "province": "Ontario",
        "country": "Canada",
        "zip": "123 ABC",
        "phone": "555-1212",
        "name": "Mother Lastnameson",
        "province_code": "ON",
        "country_code": "CA",
        "country_name": "Canada",
        "default": true
      }
    ],
  }
}


const product = {
  product: {
    "body_html": "It's the small iPod with a big idea: Video.",
    "created_at": "2012-02-15T15:12:21-05:00",
    "handle": "ipod-nano",
    "id": 632910392,
    "images": [
      {
        "id": 850703190,
        "product_id": 632910392,
        "position": 1,
        "created_at": "2018-01-08T12:34:47-05:00",
        "updated_at": "2018-01-08T12:34:47-05:00",
        "width": 110,
        "height": 140,
        "src": "http://example.com/burton.jpg",
        "variant_ids": [
          {}
        ]
      }
    ],
    "options": {
      "id": 594680422,
      "product_id": 632910392,
      "name": "Color",
      "position": 1,
      "values": [
        "Pink",
        "Red",
        "Green",
        "Black"
      ]
    },
    "product_type": "Cult Products",
    "published_at": "2007-12-31T19:00:00-05:00",
    "published_scope": "global",
    "status": "active",
    "tags": "Emotive, Flash Memory, MP3, Music",
    "template_suffix": "special",
    "title": "IPod Nano - 8GB",
    "updated_at": "2012-08-24T14:01:47-04:00",
    "variants": [
      {
        "barcode": "1234_pink",
        "compare_at_price": null,
        "created_at": "2012-08-24T14:01:47-04:00",
        "fulfillment_service": "manual",
        "grams": 567,
        "weight": 0.2,
        "weight_unit": "kg",
        "id": 808950810,
        "inventory_item_id": 341629,
        "inventory_management": "shopify",
        "inventory_policy": "continue",
        "inventory_quantity": 10,
        "option1": "Pink",
        "position": 1,
        "price": 199.99,
        "product_id": 632910392,
        "requires_shipping": true,
        "sku": "IPOD2008PINK",
        "taxable": true,
        "title": "Pink",
        "updated_at": "2012-08-24T14:01:47-04:00"
      }
    ],
    "vendor": "Apple"
  }
}
let new_product = {
  product: {
    title: 'ARSLAN',
    body_html: 'test',
    Price: '15.5',
    product_type: 'customproduct',
    tags: 'Customproduct',
    vendor: 'Nova Pakistan'
  }
};

const orderDraftGraphQL={
  data: {
    "query": `mutation draftOrderCreate($input: DraftOrderInput!) {
      draftOrderCreate(input: $input) {
        draftOrder {
          id
        }
      }
    }`,
    "variables": {
      "input": {
        "customerId": "gid://shopify/Customer/5472972374148",
        "note": "sumi b draft order",
        "email": "sumairshah@wearenova.co.uk",
        "taxExempt": true,
        "shippingLine": {
          "title": "Custom Shipping",
          "price": 100.55
        },
        "shippingAddress": {
          "address1": "123 Main St",
          "city": "Waterloo",
          "province": "Ontario",
          "country": "Canada",
          "zip": "A1A 1A1"
        },
        "billingAddress": {
          "address1": "456 Main St",
          "city": "Toronto",
          "province": "Ontario",
          "country": "Canada",
          "zip": "Z9Z 9Z9"
        },
        "appliedDiscount": {
          "description": "damaged",
          "value": 5.0,
          "amount": 5.0,
          "valueType": "FIXED_AMOUNT",
          "title": "Custom"
        },
        "lineItems": [
          {
            "title": "Custom product",
            "originalUnitPrice": 14.99,
            "quantity": 5,
          },
          {
            "variantId": "gid://shopify/ProductVariant/40397655179396",
            "quantity": 2
          }
        ],
        "customAttributes": [
          {
            "key": "name",
            "value": "Achilles"
          },
          {
            "key": "city",
            "value": "Troy"
          }
        ]
      }
    },
  },
}

const orderDraftRest = {
  draft_order: {
    "customerId": "gid://shopify/Customer/5477292015748",
    "note": "Test draft order",
    "email": "sumair.muneer@wearenova.co.uk",
    "shippingLine": {
      "title": "Custom Shipping",
      "price": 100.55
    },
    "shippingAddress": {
      "address1": "123 Main St",
      "city": "Waterloo",
      "province": "Ontario",
      "country": "Canada",
      "zip": "A1A 1A1"
    },
    "billingAddress": {
      "address1": "456 Main St",
      "city": "Toronto",
      "province": "Ontario",
      "country": "Canada",
      "zip": "Z9Z 9Z9"
    },
    "appliedDiscount": {
      "description": "damaged",
      "value": 5.0,
      "amount": 5.0,
      "valueType": "FIXED_AMOUNT",
      "title": "Custom"
    },
    "line_items": [
      {
        "title": "Custom Tee",
        "price": "20.00",
        "quantity": 1,
        "applied_discount": {
          "description": "Custom discount",
          "value_type": "fixed_amount",
          "value": "10.0",
          "amount": "10.0",
          "title": "Custom"
        }
      },
      // {
      //   "variantId": "gid://shopify/Product/6810525761668",
      //   "quantity": 2
      // }
    ],
    "customAttributes": [
      {
        "key": "name",
        "value": "Achilles"
      },
      {
        "key": "city",
        "value": "Troy"
      }
    ]
  }
}


module.exports={product,new_product,dummyCustomer,orderDraftGraphQL,orderDraftRest}