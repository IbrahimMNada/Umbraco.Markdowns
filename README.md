# Dynamic Block List Labeling for Umbraco

## Overview

The **Dynamic Block List Labeling** package for Umbraco enhances the default block list by enabling dynamic, customizable labels. Instead of using static, predefined labels for block list items, you can now define labels that dynamically adapt based on the content of each block. This is especially useful for identifying and managing multiple entries in your block list, providing a more streamlined and user-friendly experience.

## Features

- Define labels using markdown syntax.
- Customize labels based on content properties (e.g., `{>item.title}`).
- Easily distinguish between multiple block items.
- Compatible with existing Umbraco block list setups.

## Installation
```batch
dotnet add package UmbBlockList.DyanmicLabels
```
## Usage

### Step 1: Configure the Block List

1. Open your block list configuration in the Umbraco backoffice.
2. Under **Block Settings**, add or edit the existing blocks as needed.

### Step 2: Set Dynamic Labels

1. In the block configuration, find the **Label** field.
2. Use the markdown syntax to set up dynamic labels. 
   For example:
   
   - `{>item.title}` - This will display the title of the item as the label.
   - `{>item.date}` - This will display the date property of the item.
   - `{>item.category} - {>item.title}` - Combine multiple properties to create a more descriptive label.
   
3. Save your changes.

### Example

If your block contains a property called `title`, you can use `{>item.title}` as the label. This will dynamically set the label based on the `title` of each block item, making it easier to navigate and manage multiple entries.

**Before:**
![ufm-before](https://github.com/user-attachments/assets/6a989be4-8263-42c6-b013-6dcabdc5a9c5)


**After:**
![ufm-after](https://github.com/user-attachments/assets/e864e188-606d-4a3d-9fdd-89259a7fe66b)


**Configuration:**
![ufm-config](https://github.com/user-attachments/assets/204ba948-a316-4589-8da0-9b74a13c7bd9)

## Notes

- Make sure the properties you reference in the markdown syntax (e.g., `item.title`) are available in your block data.
- You can combine multiple properties or add text for more descriptive labels.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to improve the package. 

1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Make your changes and commit them.
4. Push your branch and create a pull request.

## Support

For any issues or questions, please open an issue on our [GitHub page](https://github.com/IbrahimMNada/Umbraco.Markdowns/issues).

## License

This package is licensed under the [MIT License](LICENSE).

