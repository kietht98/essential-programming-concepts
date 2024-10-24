def generate_markdown(text: str) -> str:
    # Initialize an empty list to hold the lines
    markdown_lines = []
    
    # Split the input text into lines
    lines = text.split('\n')
    
    for line in lines:
        stripped_line = line.strip()
        
        # Check for headings based on the number of '#' characters
        if stripped_line.startswith('##'):
            markdown_lines.append('# ' + stripped_line[2:].strip())  # Main heading
        elif stripped_line.startswith('###'):
            markdown_lines.append('## ' + stripped_line[3:].strip())  # Subheading
        elif stripped_line.startswith('-'):
            markdown_lines.append('* ' + stripped_line[1:].strip())  # Bullet point
        else:
            markdown_lines.append(stripped_line)  # Normal text
            
    return "\n".join(markdown_lines)

# Example usage
if __name__ == "__main__":
    text = """## This is a heading
    - Item 1
    - Item 2
    ### This is a subheading
    Some text here."""
    
    markdown_content = generate_markdown(text)
    print(markdown_content)
