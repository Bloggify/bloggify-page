## Documentation

You can see below the API reference of this module.

### `bloggifyPage(data)`
BloggifyPage
The Bloggify page class.

#### Params

- **Object** `data`: The page data:
  - `metadata` (Object):
    - `title` (String): The page title.
    - `slug` (String): The page slug.
    - `url` (String): The page url.
    - `main_image` (String): The recommended image.
  - `title` (String): The page title. If provided, has greater priority than the `metadata.title`.
  - `slug` (String): The page slug. If provided, has greater priority than the `metadata.slug`.
  - `url` (String):  The page url. If provided, has greater priority than the `metadata.url`.
  - `content` (String): The page content.
  - `html` (String): The page html.
  - `markdown` (String): The page content.
  - `rawContent` (String): The page raw content.

Additional keys passed in the metadata or in the main object, they will be merged in the result object.

